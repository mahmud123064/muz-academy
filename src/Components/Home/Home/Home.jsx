// import { useGetCoursesListQuery } from "../../../redux/Features/api/baseApi";

const Home = () => {

    // const { isError, data, isLoading } = useGetCoursesListQuery();

    // if (isLoading) {
        
    //     return <p> Loading </p>

    // }
    // console.log(data);


    return (
        <div>
            <h3>This is home page</h3>
            {/* {
                data && data.map(singleData => <p
                    key={singleData.id}
                > {singleData.title}</p>)
            } */}
        </div>
    );
};

export default Home;