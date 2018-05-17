import React from "react";
import gql from "graphql-tag"
import { client } from './endpoint/endpoint.js'

export default class extends React.Component{
    state = { items: [] }


    async componentDidMount(){
        console.log("hello")
    }

    render() {
        const loadItems = async () => {
            let temp1 = await client.query({
                query: gql`
                    query {
                        items{
                            id
                            name
                            category
                            description
                            picture
                        }
                    }
                `}).then((result) => { return result.data} )

            await console.log("it works!: ", temp1 )
            await this.setState({ items: temp1 })
        }

        const deleteById = async (itemId) => {
            console.log("Delete by Id: ")


            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        deleteItem(where: { id: "${itemId}" }){
                            id
                            name
                        }
                    }
                `}).then((result) => { return result.data.createItems } )
        }



            return(
            <div>
                <h1>MyCloset</h1>

                {this.state.items[0] ? this.state.items.map((item) => {return (
                    <div>
                        <h2>{item.name}</h2>
                        <img src ={item.picture}/>
                        <button onClick={deleteById(item.id)}>delete</button>
                    </div>
                    )}):



                <button onClick={loadItems}>Load Items </button>
                }

            </div>
        )
    }
}


