import React from 'react';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export type PaginationProps = {
    currentPage : number,
    nextPage : (direction : string) =>void
}
const Pagination = ({ currentPage, nextPage }: PaginationProps) => {
    const totalPages = 17;
    return (
        <Paper id="paginationLayout" style={{ marginTop: "5%" }} elevation={3}>
            <div>
                <IconButton id="previIcon"
                    onClick={() => {
                        nextPage("previous");
                    }}
                    disabled={currentPage < 1}
                >
                    {" "}
                    <KeyboardArrowLeft />{" "}
                </IconButton>
                {currentPage} / {totalPages}
                <IconButton id="nextIcon"
                    onClick={() => {
                        nextPage("next");
                    }}
                    disabled={currentPage >= totalPages}
                >
                    <KeyboardArrowRight />
                </IconButton>
            </div>
        </Paper>
    );
}

export default Pagination;