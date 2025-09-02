import {tags} from 'ziko';
const {svg} = tags;
const Soup = (props) => 
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
    tags.path({"d":"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}),
	tags.path({"d":"M7 21h10"}),
	tags.path({"d":"M19.5 12 22 6"}),
	tags.path({"d":"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}),
	tags.path({"d":"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}),
	tags.path({"d":"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"})
    )
export default Soup;
