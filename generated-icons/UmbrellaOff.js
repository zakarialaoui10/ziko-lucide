import {tags} from 'ziko';
const {svg} = tags;
const UmbrellaOff = (props) => 
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
    tags.path({"d":"M12 13v7a2 2 0 0 0 4 0"}),
	tags.path({"d":"M12 2v2"}),
	tags.path({"d":"M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10"})
    )
export default UmbrellaOff;
