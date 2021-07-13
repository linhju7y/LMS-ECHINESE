import { instance } from "~/apiBase/instance";

const getParams = (todoApi) => {
  let params = null;
  let action = todoApi.action;

  switch (action) {
    case "getAll":
      params = {
        pageSize: 10,
        pageIndex: todoApi.pageIndex,
      };
      break;
    case "BranchCode":
      params = {
        branchCode: todoApi.value,
      };
      break;
    case "BranchName":
      params = {
        branchName: todoApi.value,
      };
      break;
    case "sortField":
      params = {
        sort: todoApi.sort,
      };
      break;
    case "sortType":
      params = {
        sortType: todoApi.sortType,
      };
    default:
      break;
  }

  return params;
};

class RoomApi {
  // Lấy tất cả
  getAll = (todoApi: object) =>
    instance.get<IApiResultData<IRoom[]>>("/api/Room/GetAll", {
      params: getParams(todoApi),
    });

  // LÂY THEO ID
  getByID = (id: any) =>
    instance.get<IApiResultData<IRoom[]>>(`/api/Room/GetById/${id}`);

  getRoomInBranch = (branchId: number) =>
    instance.get<IApiResult<IRoom>>(`/api/Room/GetRoom?id=${branchId}`);

  post = (data: IRoom) => instance.post("/api/Room/InsertRoom", data);
}

export const roomApi = new RoomApi();
