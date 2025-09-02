import {tags} from 'ziko';
const {svg} = tags;
const MessageSquareLock = (props) => 
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
    tags.path({"d":"M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"}),
	tags.path({"d":"M20 15v-2a2 2 0 0 0-4 0v2"}),
	tags.rect({"x":"14","y":"15","width":"8","height":"5","rx":"1"})
    )
export default MessageSquareLock;
