import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { Button, Card } from "react-bootstrap";
import TreesDisplay from '../components/tree/TreesDisplay';

Enzyme.configure({ adapter: new Adapter() })

let wrapper;
let cardWrapper;

const baseProps = {
    tree: {
        name: "Baobab",
        species_name: ""
    },
    showImage: jest.fn()
}

beforeEach(() => {
    wrapper = shallow(
        <TreesDisplay {...baseProps} />
    );
    cardWrapper = wrapper.dive().dive()
});

describe("Single Tree Componenet", () => {
    it("should have one Card.Title element", () => {
        console.log(cardWrapper)
        const cardTitle = cardWrapper.find(Card.Title)
        expect(cardTitle.length).toBe(1)
    })

    it("should have one Card.Text element", () => {
        const cardText = cardWrapper.find(Card.Text)
        expect(cardText).toHaveLength(1)
    })

    it("should fire the click button and have one Button element", () => {
        const button = cardWrapper.find(Button).simulate('click')
        expect(baseProps.showImage).toHaveBeenCalled()
        expect(button.length).toBe(1)
    })
})