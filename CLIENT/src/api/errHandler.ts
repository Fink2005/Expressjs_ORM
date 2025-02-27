import axios from "axios";

export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;
      const message =
        error.response.data?.message || "An unexpected error occurred.";

      switch (status) {
        case 400:
          return message || "Invalid request. Please check your input.";
        case 401:
          return message || "Unauthorized. Please check your credentials.";
        case 403:
          return message || "Access denied.";
        case 404:
          return message || "Resource not found.";
        case 500:
          return message || "Internal server error. Please try again later.";
        default:
          return message || `Error ${status}: Something went wrong.`;
      }
    } else if (error.request) {
      return "No response from server. Check your internet connection.";
    } else {
      return "An unknown error occurred.";
    }
  }
  return "Something went wrong.";
};
