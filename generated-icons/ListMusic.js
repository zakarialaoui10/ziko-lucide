import {tags} from 'ziko';
const {svg} = tags;
const ListMusic = (props) => 
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
    tags.path({"d":"M21 15V6"}),
	tags.path({"d":"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),
	tags.path({"d":"M12 12H3"}),
	tags.path({"d":"M16 6H3"}),
	tags.path({"d":"M12 18H3"})
    )
export default ListMusic;
