import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../lib/firebase.config";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    updateDoc,
} from "firebase/firestore";
const collectionName = "manage_url";


export const updateVerification = createAsyncThunk(
    "manageLinks/updateVerification",
    async ({ id, value }) => {
        console.log(id, value,'jjjjjj')
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, { verification: value });
        return { id, value };
    }
);

export const getLinkFromFirebase = createAsyncThunk(
    "shortLinkSlice/getLinks",
    async (_, { dispatch }) => {
        dispatch(setLoading(true));

        const q = query(
            collection(db, collectionName),
            orderBy("createAt", "desc")
        );

        onSnapshot(
            q,
            (snap) => {
                const result = snap.docs.map((doc) => ({
                    fb_id: doc.id,
                    ...doc.data(),
                }));

                dispatch(setLinks(result));
                dispatch(setLoading(false));
            },
            (error) => {
                console.error("Firestore error:", error);
                dispatch(setLoading(false));
            }
        );
    }
);


const shortLinkSlice = createSlice({
    name: 'shortLinks',
    initialState: {
        shortLinks: [],
        loading: false
    },
    reducers: {
        setLinks: (state, action) => {
            state.shortLinks = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})

export const { setLinks, setLoading } = shortLinkSlice.actions
export default shortLinkSlice.reducer