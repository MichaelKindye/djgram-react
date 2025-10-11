import axios from "axios";

export const api = axios.create({
    baseURL: 'https://djgram.onrender.com',
    withCredentials: true
});

export const  fetchUsers = async(q='') => {
    try{
        const res = await api.get(`api/users/?q=${q}`);
        return res.data;
    }catch(err){
        return err.response?.data?.error || err.message;
    }
}

export const fetchUser = async() =>{
    try{
        const data = await api.get('api/me/');
        return data;
    }catch(error){
        console.error('Error while fetching user data', error);
    }            
}

export const fetchOnlineUsers = async(users) => {
    if(!Array.isArray(users)) console.error('error:', 'users object is not an array.', 'obj_type:', users)
    const user_ids = users.map(user => user.id);
    try{
        const res = await api.post('api/status/users/online/', user_ids);
        return res.data;
    }catch(err){
        return err.response?.data?.error || err.message
    }
}

export const fetchMessages = async(userId, pairUserId) => {
    try{
        const res = await api.get(`api/messages/?u=${userId}&pu=${pairUserId}`);
        return res.data;
    }catch(err){
        return err.response?.error || err.response?.detail || err.message;
    }
}