
import axios from 'axios';
import { stub, restore } from 'sinon';
import { makeAxiosRequest } from './makeRequest'; 


vi.mock('axios');

describe('makeAxiosRequest', () => {
  afterEach(() => {
    restore(); 
  });
  it('should make a GET request to Unsplash API', async () => {
    const data = 'test';
    const perPage = 10;
    const pageCounter = 1;
    const mockedResponseData = { data: 'test' };

    const axiosStub = stub(axios, 'get').resolves({ data: mockedResponseData });


    const getRespose = vi.fn();
    const getError = vi.fn();
    const finished = vi.fn();

    await makeAxiosRequest({
      data, perPage, pageCounter, getRespose, getError, finished
    });

    expect(axiosStub.calledOnce).toBe(true);
    expect(axiosStub.getCall(0).args[0]).toBe('https://api.unsplash.com/search/photos');
  });

  it('should handle error', async () => {
    const data = 'test';
    const perPage = 10;
    const pageCounter = 1;
    const mockedError = new Error('something went wrong')

    const axiosStub = stub(axios, 'get').rejects(mockedError);


    const getRespose = vi.fn();
    const getError = vi.fn();
    const finished = vi.fn();

    await makeAxiosRequest({
      data, perPage, pageCounter, getRespose, getError, finished
    });

    expect(axiosStub.calledOnce).toBe(true);
    expect(axiosStub.getCall(0).args[0]).toBe('https://api.unsplash.com/search/photos');
    expect(getRespose).not.toHaveBeenCalled();
  });
});