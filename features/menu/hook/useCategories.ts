import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "../types/category.types";


export function useCategories() {

  return useQuery<Category[]>({

    queryKey: ["categories"],

    queryFn: async () => {

      const response =
        await axios.get(
          "http://localhost:3001/categories"
        );


      return response.data;

    },

  });

}
