import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman.js"

it("the game should end if you lose (6 wrong guesses)", function () {
    const container = render(
        <Snowman
            words={["test"]}
        />
    );
    for (const letter of ["a", "b", "c", "d", "f", "g"]) {
        fireEvent.click(container.getByText(letter));
    }

    const wrongGuesses = container.getByText("Number of incorrect guesses: 6");
    console.log(wrongGuesses);


    // expect(container.getBy(".Snowman-letter-buttons")).not.toBeInTheDocument();

})

