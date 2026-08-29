import type { Val } from "../pages/valList/types";
import { get, post } from "./client";

export async function getValList(){
    return get('/test');
}

export async function updateValList(data: Val[]){
    return post('/test', data);
}