import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        getCoursesList : builder.query({
            query: () => '/posts'
        })
    })

})

export const {useGetCoursesListQuery} = baseApi;
export default baseApi;