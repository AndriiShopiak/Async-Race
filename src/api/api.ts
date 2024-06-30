interface Cars {
  name: string ,
  color: string,
}
export default class Api {
  async getCars (url: string) {
    const response = await fetch(url);
    const answerJSON = response.json();
    return answerJSON;
  }
  async setCars (url: string, data: Cars) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.json();
  }
  async deleteCar (url: string) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return response.json();
  }
  async updateCar (url: string, data:Cars) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.json();
  }
  async getCar (url: string) {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  }
  async getWinners (url: string) {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  }
  async startEngine(url: string) {
    const responce = await fetch(url, {
      method: "PATCH",
    });
    return await responce.json();
  }
}