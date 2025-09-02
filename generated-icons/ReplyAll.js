import {tags} from 'ziko';
const {svg} = tags;
const ReplyAll = (props) => 
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
    tags.path({"d":"m12 17-5-5 5-5"}),
	tags.path({"d":"M22 18v-2a4 4 0 0 0-4-4H7"}),
	tags.path({"d":"m7 17-5-5 5-5"})
    )
export default ReplyAll;
