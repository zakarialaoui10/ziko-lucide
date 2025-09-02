import {tags} from 'ziko';
const {svg} = tags;
const MessageSquareDashed = (props) => 
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
    tags.path({"d":"M12 19h.01"}),
	tags.path({"d":"M12 3h.01"}),
	tags.path({"d":"M16 19h.01"}),
	tags.path({"d":"M16 3h.01"}),
	tags.path({"d":"M2 13h.01"}),
	tags.path({"d":"M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8"}),
	tags.path({"d":"M2 5a2 2 0 0 1 2-2"}),
	tags.path({"d":"M2 9h.01"}),
	tags.path({"d":"M20 3a2 2 0 0 1 2 2"}),
	tags.path({"d":"M22 13h.01"}),
	tags.path({"d":"M22 17a2 2 0 0 1-2 2"}),
	tags.path({"d":"M22 9h.01"}),
	tags.path({"d":"M8 3h.01"})
    )
export default MessageSquareDashed;
