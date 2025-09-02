import {tags} from 'ziko';
const {svg} = tags;
const Sticker = (props) => 
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
    tags.path({"d":"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}),
	tags.path({"d":"M14 3v4a2 2 0 0 0 2 2h4"}),
	tags.path({"d":"M8 13h.01"}),
	tags.path({"d":"M16 13h.01"}),
	tags.path({"d":"M10 16s.8 1 2 1c1.3 0 2-1 2-1"})
    )
export default Sticker;
