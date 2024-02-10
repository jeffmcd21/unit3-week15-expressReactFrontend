import { Form, Link, useLoaderData } from "react-router-dom"
const Index = () => {
    const people = useLoaderData()
    console.log(people)

    // if(people.isLoading){
    //     return <div>Loading...</div>
    // }

    return (
        <div>
            <h3>Create a Person</h3>
            <Form action="/create" method="post">
            <input type="input" name="name" placeholder="person's name" />
                <input type="input" name="image" placeholder="person's picture" />
                <input type="input" name="title" placeholder="person's title" />
                <input type="submit" value={"Create Person"} />
            </Form>



        <h3>People</h3>
        {people.map(person => {
            return(
                <div key={person._id} className="person">

                    <Link to={`/${person._id}`}>
                        <h1>{person.name}</h1>
                    </Link>

                    <h1>{person.name}</h1>
                    <img src={person.image} alt={person.name}/>
                    <h3>{person.title}</h3>
                </div>
            )
        })}
    </div>

)
}

export default Index;





// function Index(props) {


//   return (
//     <div>
//       <h2>Create a Person</h2>
//       <Form action="/create" method="post">
//         <input type="input" name="name" placeholder="person's name" />
//         <input type="input" name="image" placeholder="person's picture" />
//         <input type="input" name="title" placeholder="person's title" />
//         <input type="submit" value="create person" />
//       </Form>

//       <h2>People</h2>
//       {people.map(person => (
//         <div key={person._id} className="person">
//           <Link to={`/${person._id}`}>
//             <h1>{person.name}</h1>
//           </Link>
//           <img src={person.image} alt={person.name} />
//           <h3>{person.title}</h3>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Index
