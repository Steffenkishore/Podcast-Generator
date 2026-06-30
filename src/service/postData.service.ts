import api from "./api.service";

export const postData = async (topic: string) => {
  const response = await api.post("/data/send", {
    topic,
  });

  return response;
};