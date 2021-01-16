import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GitGrid from './components/GitGrid';

const GitExpertApp = () => {

    //const categories = ['One Punch'];
    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd = () => {
    //	//setCategories(['HunterXHunter', ...categories]);
    //  setCategories( cats => [...cats, 'HunterXHunter']);
    //}

    return (
		<>
			<h2> GitExpertApp </h2>
			<AddCategory setCategories={ setCategories } />
			<hr/>
			{/*<button onClick={ handleAdd }>Agregar</button>*/}
			<ol>
			{ 
				categories.map(category => (
				/*<li key={ category }> {category} </li>*/
				<GitGrid key={ category }
						category = { category } />
				))
			}
			</ol>
		</>
    );

}

export default GitExpertApp;
//i6akj9kp