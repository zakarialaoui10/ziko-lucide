import {tags} from 'ziko';
const {svg} = tags;
const MessageSquareReply = (props) => 
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
    tags.path({"d":"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}),
	tags.path({"d":"m10 8-3 3 3 3"}),
	tags.path({"d":"M17 14v-1a2 2 0 0 0-2-2H7"})
    )
export default MessageSquareReply;
