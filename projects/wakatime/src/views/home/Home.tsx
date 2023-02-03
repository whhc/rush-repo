// const useFetchData = () => {
//   const [data, setData] = useState<GistData>();
//   const fetchData = async () => {
//     const response = await fetchGistData();
//     setData(response);
//   };
//
//   return { data, fetchData };
// };

function Home() {
  // const { data, fetchData } = useFetchData();
  //
  // useEffect(() => {
  //   console.log(data?.files);
  // }, [data]);
  //
  const updateData = () => {
    console.log(updateData);
  };

  return (
    <div className="w-full flex justify-center">
      <button className="uppercase btn w-64 rounded-full" onClick={updateData}>
        sync
      </button>
    </div>
  );
}

export default Home;
