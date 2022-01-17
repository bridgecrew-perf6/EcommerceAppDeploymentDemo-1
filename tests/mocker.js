const jestMock=require('jest-mock');

function mockRequest(){
    const req={};
    req.body=jestMock.fn().mockReturnValue(req);
    req.params=jeatMock.fn().mockReturnValue(req);
    return req;
}

function mockResponse(){
    const res={};
    res.send=jestMock.fn().mockReturnValue(res);
    res.json=jestMock.fn().mockReturnValue(res);
    return res;
}

module.exports={mockRequest, mockResponse};