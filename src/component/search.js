import {useState} from 'react';
import axios from 'axios'
import Result from './result'
const SearchBar =() => {
    const [searchInput, setSearchInput ] =useState("")
    const [repos, SetRepos] =useState([])
    const handleChange =(e) => {
        setSearchInput(e.target.value)
    }
    const handleClick = async () => {
        try{
            const result =await axios(`https://api.github.com/orgs/${searchInput}/repos`) 
            SetRepos(result)
        }catch (err) {
            console.log(err)
        }
    }

    console.log(repos);
    return(
        <div className='container '>
            <div className='search'> 
                <p className='title'>Git Search</p>
                <br /><input  type='text' placeholder='search' value ={ searchInput} onChange ={ handleChange} />
                <button className='btn btn-primary mx-3' onClick ={handleClick}> search </button>
            </div>
            <div className='result'>
                <Result repos ={repos} />
            </div>
        </div>
    )    

}
export default SearchBar;