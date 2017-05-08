import React from 'react';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup.js';
import SingleInput from './SingleInput.js';
import TextArea from './TextArea.js';
import Select from './Select.js';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxTuitionOptions: [],
      selectedMaxTuition: '',
      gpa: '',
      satScore: '',
      majorOptions: [],
      selectedMajors: [],
      sizeRangeOptions: [],
      selectedSizeRange: [],
      sportsDivisionOptions: [],
      selectedSportsDivision: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSelectedMaxTuition = this.handleSelectedMaxTuition.bind(this);
    this.handleGpaChange = this.handleGpaChange.bind(this);
    this.handleSatScoreChange = this.handleSatScoreChange.bind(this);
    this.handleMajorSelection = this.handleMajorSelection.bind(this);
    this.handleSelectedSizeRange = this.handleSelectedSizeRange.bind(this);
    this.handleSelectedSportsDivision = this.handleSelectedSportsDivision.bind(this);
  }
  componentDidMount() {
    fetch('./startingData.json')
			.then(res => res.json())
			.then(data => {
  console.log(data);
  this.setState({
    maxTuitionOptions: data.maxTuitionOptions,
    selectedMaxTuition: data.selectedMaxTuition,
    gpa: data.gpa,
    satScore: data.satScore,
    majorOptions: data.majorOptions,
    selectedMajors: data.selectedMajors,
    sizeRangeOptions: data.sizeRangeOptions,
    selectedSizeRange: data.selectedSizeRange,
    sportsDivisionOptions: data.sportsDivisionOptions,
    selectedSportsDivision: data.selectedSportsDivision
  });
});
  }
  
  handleSelectedMaxTuition(e) {
    this.setState({ selectedMaxTuition: e.target.value }, () => console.log('Max Tuition:', this.state.selectedMaxTuition));
  }

  handleGpaChange(e) {
    this.setState({ gpa: e.target.value }, () => console.log('GPA:', this.state.gpa));
  }

  handleSatScoreChange(e) {
    this.setState({ satScore: e.target.value }, () => console.log('satScore:', this.state.satScore));
  }

  handleMajorSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedMajors.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedMajors.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.selectedMajors, newSelection];
    }
    this.setState({ selectedMajors: newSelectionArray }, () => console.log('major selection', this.state.selectedMajors));
  }
  handleSelectedSizeRange(e) {
    this.setState({ selectedSizeRange: e.target.value }, () => console.log('age range', this.state.selectedSizeRange));
  }
  handleSelectedSportsDivision(e) {
    this.setState({ selectedSportsDivision: e.target.value }, () => console.log('Sports Division', this.state.selectedSportsDivision));
  }
  
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      selectedMaxTuition: '',
      gpa: '',
      satScore: '',
      selectedMajors: [],
      selectedSizeRange: [],
      selectedSportsDivision: []
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const userInfo = {
      selectedMaxTuition: this.state.selectedMaxTuition,
      gpa: this.state.gpa,
      satScore: this.state.satScore,
      selectedMajors: this.state.selectedMajors,
      selectedSizeRange: this.state.selectedSizeRange,
      selectedSportsDivision: this.state.selectedSportsDivision
    };

    console.log('Send this in a POST request:', userInfo);
    console.log('props are: ', this.props.callbackParent)
    this.props.callbackParent(userInfo)
    this.handleClearForm(e);
  }
  render() {
    return (
    <form className="container" onSubmit={this.handleFormSubmit}>
				<h5>University Preferences</h5>
				<Select
					name={'maxTuition'}
          placeholder={'Max tuition per year'}
					controlFunc={this.handleSelectedMaxTuition}
					options={this.state.maxTuitionOptions}
					selectedOption={this.state.selectedMaxTuition} />
        <SingleInput
					inputType={'text'}
					title={'Estimated GPA'}
					name={'gpa'}
					controlFunc={this.handleGpaChange}
					content={this.state.gpa}
					placeholder={'Type estimated GPA here'} />
        <SingleInput
					inputType={'text'}
					title={'SAT Score'}
					name={'satScore'}
					controlFunc={this.handleSatScoreChange}
					content={this.state.satScore}
					placeholder={'Type your SAT Score here'} />
				<CheckboxOrRadioGroup
					title={'Which majors are you interested in?'}
					setName={'majors'}
					type={'checkbox'}
					controlFunc={this.handleMajorSelection}
					options={this.state.majorOptions}
					selectedOptions={this.state.selectedMajors} />
        <Select
					name={'sizeRange'}
					placeholder={'Preferred student body size'}
					controlFunc={this.handleSelectedSizeRange}
					options={this.state.sizeRangeOptions}
					selectedOption={this.state.selectedSizeRange} />
				<CheckboxOrRadioGroup
					title={'Which Sports Division are you looking for?'}
					setName={'sportsDivision'}
					type={'checkbox'}
					controlFunc={this.handleSelectedSportsDivision}
					options={this.state.sportsDivisionOptions}
					selectedOptions={this.state.selectedSportsDivision} />
				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
    </form>
    );
  }
}

export default Survey;