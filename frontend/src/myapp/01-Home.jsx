import React from "react";
import gql from "graphql-tag"
import { client } from './endpoint/endpoint.js'
import Template from './98-Template'


class Page extends React.Component{

    state = { name: "", category: "", description: "", picture: "", items: [ ], itemId: "" }



    async componentDidMount(){
        console.log("hello")

        let temp1 = await client.query({
            query: gql`
                query{
                    items{
                        name
                        category
                        description
                        picture
                        id
                    }
                }
            `}).then((result) => { return result.data.items } )

        await console.log("La Data: ", temp1 )
        await this.setState({ items: temp1 })

    }






    render() {

        const datatodb = async () => {
            console.log("hello")
            console.log(this.state)

            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        createItem(data: {
                            name: "${this.state.name}",
                            category: "${this.state.category}", 
                            description: "${this.state.description}",
                            picture: "${this.state.picture}?raw=true"
                            
                        } ){
                            id
                            name
                            category
                            description
                            picture
                        }
                    }
                `}).then((result) => { return result.data.createItem } )

            await console.log("La Data: ", temp1 )
            await this.setState({  name: '', category: '', description: '', picture: '', itemId: ''})
        }

        const deleteById = async () => {
            console.log("Delete by Id: ")


            let temp2 = await client.mutate({
                mutation: gql`
                mutation{
                    deleteItem(where: { id: "${this.state.itemId}" }){
                      id
                      name
                    }
                  }
                `}).then((result) => { return result.data.createItem } )

            await console.log("User Deleted: ", temp2 )
            await this.setState({ itemId: '' })
            window.location.reload()
        }




        return(
            <div>
                <h1>ClosetBook</h1>

                <div className="maincontent" >
                    <div className="Homeleft" >
                        <div>name</div>
                        <input type="text" value={ this.state.name } onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                        <br/><br/>

                        <div>category</div>
                        <input type="text" value={ this.state.category } onChange={ (e) => { this.setState({ category: e.target.value }) } } />
                        <br/><br/>

                        <div>description</div>
                        <input type="text" value={ this.state.description } onChange={ (e) => { this.setState({ description: e.target.value }) } } />
                        <br/><br/>

                        <div>picture</div>
                        <input type="text" value={ this.state.picture } onChange={ (e) => { this.setState({ picture: e.target.value }) } } />


                        <button onClick={datatodb} >submit</button>


                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <input type="text" value={ this.state.itemId } onChange={ (e) => { this.setState({ itemId: e.target.value }) } } />

                        <button onClick={ deleteById }> Delete by ID </button>

                    </div>


                    <div className='Homeright'>
                        <input className="searchbar" type="text"/>
                        <p>All Items:</p>

                        <div>
                            { this.state.items.map((x) => {return <Template key={x.id} info={x}  /> })  }
                        </div>


                    </div>


                </div>





            </div>
        )
    }
}

export default Page;


