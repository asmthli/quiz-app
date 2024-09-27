import { createContext } from "react";

/**
 * The value of this context is not used. It is simply used for the
 * 'composite component' pattern. With this is in place, I can throw
 * an error if a header composite component is used outside of a header.
 */

export const HeaderContext = createContext({
    placeHolder: 'foo'
})