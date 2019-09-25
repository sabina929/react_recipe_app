import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

class RecipeList extends Component {

  render() {
    const {recipes, handleDetails, value, handleSubmit, handleChange, error} = this.props;
    return (
      <React.Fragment>
          
          <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className="container my-5">

                    { /* TITLE */ }

                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Recipe List</h1>
                        </div>
                    </div>

                    { /* END OF TITLE */ }


                    <div className="row">

                        {
      error ? <h1 className="text-danger text-center">{error}</h1> : recipes.map(recipe => {
        return (
          <Recipe
          key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails}
          />
        )
      })
      }

                   
                    </div>

                </div>

         
      </React.Fragment>
    )
  }
}


export default RecipeList;

//   recipe={recipe} handleDetails={() => handleDetails(0, recipe.recipe_id)}