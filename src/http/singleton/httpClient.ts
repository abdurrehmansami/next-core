import axios from "axios";

class HttpClient {
  private static instance: HttpClient;
  private axiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  public getAxios() {
    return this.axiosInstance;
  }
}

// Export a singleton instance
export default HttpClient.getInstance().getAxios();
