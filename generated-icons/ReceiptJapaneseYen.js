import {tags} from 'ziko';
const {svg} = tags;
const ReceiptJapaneseYen = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),
	tags.path({"d":"m12 10 3-3"}),
	tags.path({"d":"m9 7 3 3v7.5"}),
	tags.path({"d":"M9 11h6"}),
	tags.path({"d":"M9 15h6"})
    )
export default ReceiptJapaneseYen;
