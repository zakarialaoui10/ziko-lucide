import {tags} from 'ziko';
const {svg} = tags;
const Spotlight = (props) => 
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
    tags.path({"d":"M15.295 19.562 16 22"}),
	tags.path({"d":"m17 16 3.758 2.098"}),
	tags.path({"d":"m19 12.5 3.026-.598"}),
	tags.path({"d":"M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"}),
	tags.path({"d":"M8 9V2"})
    )
export default Spotlight;
