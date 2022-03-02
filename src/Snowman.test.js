import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman.js"

it("the game should end if you lose (6 wrong guesses)", function() {]



    const {container} = render(
        <Snowman
        words={["test"]}
        />
    );

    expect(container.querySelector(".Snowman-letter-buttons")).not.toBeInTheDocument();

})

