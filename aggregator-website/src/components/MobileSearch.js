import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/mobilesearch.scss'


const MobileSearch = ()=>{
    return(
        <div  className='container  custom-cntainer-search' >
<div className='row'>
    <div className='col py-3 '>
<InputGroup>
<Form.Control
placeholder="Search Item"
aria-label="Search"
aria-describedby="search-box"  className='input-form' style={{borderRight:'none',borderColor:'#dee2e6'}}
/>
<InputGroup.Text id="search-box" style={{backgroundColor:'transparent'}}><i class="bi bi-search"></i></InputGroup.Text>
</InputGroup>
</div>
</div>
</div>
    )
}

export const SearchBar = ()=>{
    return(
        <div  className='custom-cntainer-nav-search' style={{flex:2}} >
        <InputGroup>
        <Form.Control
        placeholder="Search Item"
        aria-label="Search"
        aria-describedby="search-box"  className='input-form' style={{borderRight:'none',borderColor:'#dee2e6'}}
        />
        <InputGroup.Text id="search-box" style={{backgroundColor:'transparent'}}><i class="bi bi-search"></i></InputGroup.Text>
        </InputGroup>
        </div>
       

    );
}
 export default MobileSearch;
