import {useQuery} from "react-query";
import axios from "axios";
import Character from "./Character.jsx";

function CharacterList(props) {

    const {isLoading, isError, data, error, refetch} = useQuery(["characters"], () =>
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((res) => res.data)
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    console.log(data)


    return (
        <>
            <div className={"flex flex-wrap gap-5"}>
                {data.results.map(character => {
                    return (
                        <Character key={character.id} name={character.name} imgURL={character.image}
                                   origin={character.origin.name}/>
                    )
                })}
            </div>

        </>
    );
}

export default CharacterList;