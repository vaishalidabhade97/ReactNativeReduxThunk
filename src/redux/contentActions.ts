import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await axios('https://reqres.in/api/users');
      return res.data;
    },
  );