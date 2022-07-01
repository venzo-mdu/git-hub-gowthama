import {useState,useEffect} from 'react';
import axios from 'axios'
import Result from './result'
const SearchBar =() => {
    const [searchInput, setSearchInput ] =useState("")
    const [repos, SetRepos] =useState([])

    const handleChange =(e) => {
        setSearchInput(e.target.value)
        localStorage.setItem('searchInput',e.target.value)

    }
    const handleClick = async () => {
        try{
            const result =await axios(`https://api.github.com/orgs/${searchInput}/repos`) 
            // const result =await axios(
            // {
            //     method: 'get',
            //     url :`https://api.github.com/orgs/${searchInput}/repos`, 
            //     header:{
            //         Authorization: `token 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`
            //     }
            // }) 

            SetRepos(result)

        }catch (err) {
            console.log(err)
        }
    }

    console.log(repos);


    useEffect(() => {
        const search= localStorage.getItem('searchInput')

        return () => {   
            setSearchInput(search)

        };
    }, []);

    return(
        <div className='container '>
            <div className='search'> 
                <p className='title'>Git Search</p>
                <br /><input  type='text' placeholder='search' value ={searchInput} onChange ={ handleChange} />
                <button className='btn btn-primary mx-3' onClick ={handleClick}> search </button>
            </div>
            <div className='result'>
                <Result repos ={repos} />
            </div>
        </div>
    )    

}
export default SearchBar;