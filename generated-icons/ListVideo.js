import {tags} from 'ziko';
const {svg} = tags;
const ListVideo = (props) => 
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
    tags.path({"d":"M12 12H3"}),
	tags.path({"d":"M12 18H3"}),
	tags.path({"d":"M16 6H3"}),
	tags.path({"d":"M21.033 14.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .968-.56z"})
    )
export default ListVideo;
