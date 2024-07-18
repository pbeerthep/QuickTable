import useSWR from 'swr';

 function Test() {

    const fetcher = url => fetch(url).then(r=>r.json());

    const {data,error,isLoading} = useSWR('https://api.thecatapi.com/v1/images/search',fetcher);

    console.log(error)
     if(error) return <div>failed to fetch api</div>;

     if(isLoading) return <div>loading.....</div>

        

     return(
        <div class="bg-gray-500 ">
        <div  class=" w-6/12 ml-96 h-2/6 py-8">
         <img alt="" src={data[0].url} class=" rounded-full border-4 border-sky-500 shadow-2xl shadow-lg shadow-cyan-500/50 " />
        </div>
        <div class="py-2 font-mono text-xl ml-96 text-sky-400/100 underline decoration-pink-500">ID:{data[0].id} <br/></div>
        <div class="py-2 font-mono text-xl ml-96 underline decoration-sky-500">width:{data[0].width} <br/></div>
        <div class="py-2 font-mono text-xl ml-96  underline decoration-sky-500">height:{data[0].height} <br/></div>
        </div>
     );


  
}
export default Test;