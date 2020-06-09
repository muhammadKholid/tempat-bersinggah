import { gql } from 'apollo-server';
import { ObjectId } from 'mongoose';
import { beforeAll, afterAll, describe, it, expect } from 'jest';

const {
  testClient,
  connectToDb,
  dropTestDb,
  closeDbConnection,
} = require('./setup');

const { query, mutate } = testClient;

beforeAll(async () => {
  await connectToDb();
  await dropTestDb();
});

afterAll(async () => {
  await dropTestDb();
  await closeDbConnection();
});

describe('Device Resolvers', () => {
  const user = '5e9affa8d8f5db0461906ac7';
  let deviceId = '';

  it('Add Device', async () => {
    const ADD_DEVICE = gql`
      mutation addDevice(
        $user: ID!
        $model: String
        $brand: String
        $description: String
        $image: String
      ) {
        addDevice(
          user: $user
          model: $model
          brand: $brand
          description: $description
          image: $image
        ) {
          user
          model
          brand
          description
          image
        }
      }
    `;

    const device = {
      user,
      model: 'Model name',
      brand: 'The Brand',
      description: 'Description',
      image: 'url/to/image',
    };

    const { data } = await mutate({
      mutation: ADD_DEVICE,
      variables: {
        ...device,
      },
    });

    expect(data).toEqual({
      addDevice: {
        ...device,
      },
    });
  });

  it('Get User Devices', async () => {
    const GET_USER_DEVICES = gql`
      query getUserDevices($user: ID!) {
        getUserDevices(user: $user) {
          _id
          user
          model
          brand
          description
          likes
          image
        }
      }
    `;
    const { data } = await query({
      mutation: GET_USER_DEVICES,
      variables: {
        user,
      },
    });

    const { getUserDevices } = data;

    const expectedDevices = getUserDevices.map((device) => {
      const { _id, ...rest } = device;
      expect(ObjectId.isValid(_id)).toEqual(true);
      expect(ObjectId.isValid(rest.user)).toEqual(true);
      return rest;
    });

    expect(expectedDevices).toMatchSnapshot();

    deviceId = getUserDevices[0]._id;
  });

  it('Get Device', async () => {
    const GET_DEVICE = gql`
      query getDevice($_id: ID!) {
        getDevice(_id: $_id) {
          _id
          user
          model
          brand
          description
          likes
          image
        }
      }
    `;

    const { data } = await query({
      mutation: GET_DEVICE,
      variables: {
        _id: deviceId,
      },
    });

    expect(ObjectId.isValid(data.getDevice._id)).toEqual(true);
    expect(ObjectId.isValid(data.getDevice.user)).toEqual(true);

    const { _id, ...rest } = data.getDevice;
    expect(rest).toMatchSnapshot();
  });

  it('Update Device Info', async () => {
    const UPDATE_DEVICE_INFO = gql`
      mutation updateDeviceInfo(
        $_id: ID!
        $model: String
        $brand: String
        $description: String
        $image: String
      ) {
        updateDeviceInfo(
          _id: $_id
          model: $model
          brand: $brand
          description: $description
          image: $image
        ) {
          user
          model
          brand
          description
          image
        }
      }
    `;
    const newInfo = {
      _id: deviceId,
      model: 'Updated model name',
      brand: 'Another Brand',
      description: 'Another Description',
      image: 'url/to/image/2',
    };

    const { data } = await mutate({
      mutation: UPDATE_DEVICE_INFO,
      variables: {
        ...newInfo,
      },
    });

    const { _id, ...info } = data.updateDeviceInfo;

    expect(data).toEqual({
      updateDeviceInfo: {
        user,
        ...info,
      },
    });
  });

  it('Delete Device', async () => {
    const DELETE_DEVICE = gql`
      mutation deleteDevice($_id: ID!) {
        deleteDevice(_id: $_id) {
          _id
        }
      }
    `;

    const { data } = await mutate({
      mutation: DELETE_DEVICE,
      variables: {
        _id: deviceId,
      },
    });

    expect(data).toEqual({
      deleteDevice: {
        _id: deviceId,
      },
    });
  });
});
