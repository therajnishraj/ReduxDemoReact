import axios from "axios";
import { ADD_NOTE, GET_ALL_NOTES, DELETE_NOTE, UPDATE_NOTE, SET_LOADING, SET_ERROR } from "./ActionType";

// Set loading state
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

// Set error state
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// Add note
export const addNote = (noteData, token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post(
      "http://localhost:8092/api/note/addNote/",
      noteData,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: ADD_NOTE, payload: response.data });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

// Get all notes
export const getAllNotes = (token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("http://localhost:8092/api/note/getAllNote", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });
    dispatch({ type: GET_ALL_NOTES, payload: response.data });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

// Delete note
export const deleteNote = (noteId, token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.delete(`http://localhost:8092/api/note/deleteNoteById/${noteId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
      },
    });
    dispatch({ type: DELETE_NOTE, payload: noteId });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

// Update note
export const updateNote = (noteId, updatedNote, token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.put(
      `http://localhost:8092/api/note/updateNoteById/${noteId}`,
      updatedNote,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: UPDATE_NOTE, payload: response.data });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
