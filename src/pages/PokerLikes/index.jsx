import React from "react";

import PainelPoker from "../../components/PainelPoker";
import Search from "../../components/Search";

const PokeLikes = () => {

    return(
        <PainelPoker telaSelected={'PokeLikes'} favorites>
            <Search/>
            
        </PainelPoker>
    );
}
export default PokeLikes;