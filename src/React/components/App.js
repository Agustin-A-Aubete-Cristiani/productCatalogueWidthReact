import React from 'react';
import s from './_App.scss';

// DD.BB.
import YV_FEMALE, {YV_FEM_TITLE_SECTION} from '../DDBB/YV_FEMALE.js';
import YV_MALE, { YV_MALE_TITLE_SECTION } from '../DDBB/YV_MALE.js';
import YV_UNISEX, { YV_UNISEX_TITLE_SECTION } from '../DDBB/YV_UNISEX.js';
import I_FEMALE, { I_FEMALE_TITLE_SECTION } from '../DDBB/I_FEM'
import I_MALE, { I_MALE_TITLE_SECTION } from '../DDBB/I_MALE'
import FCP_FEMALE, { FCP_FEMALE_TITLE_SECTION, FCP_FEMALE_MESSAGE } from '../DDBB/FCP_FEMALE'
import FCP_MALE, { FCP_MALE_TITLE_SECTION } from '../DDBB/FCP_MALE'

const PRODUCTS = [
  YV_FEMALE,
  YV_MALE,
  YV_UNISEX,
  I_FEMALE,
  I_MALE,
  FCP_FEMALE,
  FCP_MALE,
]

import CommentSection from '../../React/components/Comments.js';

// COMPONENTS
import Header from './Header/Header';
import SearchResults from './SearchResults/SearchResults';
import LandingSection from './LandingSection/LandingSection';
import CardSection from './CardSection/CardSection';
import PerfumeCard from './PerfumeCard/PerfumeCard';
import UpBtn from './UpBtn/UpBtn'

export const SECTIONS_TO_RENDER = {
  landing: "LANDING",
  comments: "COMMENTS",
  YVDorgeval: {
    YVFemale: "YV_FEMALE",
    YVMale: "YV_MALE",
    YVUnisex: "YV_UNISEX",
  },
  imported: {
    IFemale: "I_FEMALE",
    IMale: "I_MALE",
  },
  frenchCapitalPremium: {
    FCPFemale: "FCP_FEMALE",
    FCPMale: "FCP_MALE",
  },
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sectionToRender: SECTIONS_TO_RENDER.landing,
      valueToSearch: "",
      results: "",
    }
    this.changeSectionToRender = this.changeSectionToRender.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickBtnCloseResults = this.handleClickBtnCloseResults.bind(this);
  }

  handleChange( event ) {
    const valueToSearch = event.target.value;
    const TOTAL_PRODUCTS = PRODUCTS.reduce((acc, el) => acc.concat(el), []);
    
    const results = TOTAL_PRODUCTS.map((element, idx) => {
      const { name } = element;
      if(name.toLowerCase().indexOf(valueToSearch) > -1 ) {
        return <PerfumeCard key={idx} perfumeData={element}/>
      } 
      else {
        return false;
      }
    })

    const filteredResults = results.filter( el => el !== false);
    let finalResults;

    if(filteredResults.length > 0) {
      finalResults = filteredResults;
    } else {
      finalResults = <p>Sin resultados...</p>;
    }

    this.setState({
      valueToSearch: valueToSearch,
      results: valueToSearch.length > 0 ? finalResults : "",
    })

    event.preventDefault();
  }
  
  handleClickBtnCloseResults() {
    this.setState({
      valueToSearch: "",
      results: "",
    })
  }
  
  changeSectionToRender( sectionToRender ) {
    window.scrollTo(0, 0);
    this.setState({
      sectionToRender
    })
  }

  makeCardComponents = ( products ) => {
    return products.map( (element, idx ) => {
      return <PerfumeCard key={idx} perfumeData={element}/>
    });
  }
  
  defineCardSectionContent = ( section ) => {
    const { comments, YVDorgeval, imported, frenchCapitalPremium: fcp } = SECTIONS_TO_RENDER;
    const { YVFemale, YVMale, YVUnisex } = YVDorgeval;
    const { IFemale, IMale } = imported;
    const { FCPFemale, FCPMale } = fcp;
    
    let contentToRender; 

    if( section === comments ) {
      contentToRender = <CommentSection/>;
    } 
    // YVES DORGEVAL PRODUCTS
    else if ( section === YVFemale ) {
      contentToRender = {
        titleSection: YV_FEM_TITLE_SECTION,
        content: this.makeCardComponents(YV_FEMALE),
      }
    }
    else if ( section === YVMale ) {
      contentToRender = {
        titleSection: YV_MALE_TITLE_SECTION,
        content: this.makeCardComponents(YV_MALE),
      }
    }
    else if ( section === YVUnisex ) {
      contentToRender = {
        titleSection: YV_UNISEX_TITLE_SECTION,
        content: this.makeCardComponents(YV_UNISEX),
      }
    }
    // IMPORTED PRODUCTS
    else if ( section === IFemale ) {
      contentToRender = {
        titleSection: I_FEMALE_TITLE_SECTION,
        content: this.makeCardComponents(I_FEMALE),
      }
    }
    else if ( section === IMale ) {
      contentToRender = {
        titleSection: I_MALE_TITLE_SECTION,
        content: this.makeCardComponents(I_MALE),
      }
    }
    // FRENCH CAPITAL PREMIUM PRODUCTS
    else if ( section === FCPFemale ) {
      contentToRender = {
        titleSection: FCP_FEMALE_TITLE_SECTION,
        message: FCP_FEMALE_MESSAGE,
        content: this.makeCardComponents(FCP_FEMALE),
      }
    }
    else if ( section === FCPMale ) {
      contentToRender = {
        titleSection: FCP_MALE_TITLE_SECTION,
        content: this.makeCardComponents(FCP_MALE),
      }
    }
    
    return contentToRender;
  }
  
  defineMainComponentContent = ( sectionToRender ) => {
    let toRender = false;
    if(sectionToRender === SECTIONS_TO_RENDER.landing) {
      toRender = <LandingSection/> 
    }
    else if (sectionToRender === SECTIONS_TO_RENDER.comments){
      toRender = <CommentSection/>;
    }
    else {
      const { titleSection, content, message} = this.defineCardSectionContent(sectionToRender);
      toRender = <CardSection titleSection={titleSection} message={message} >{content}</CardSection>;
    }

    return toRender;
  }

  render() {
    const { sectionToRender } = this.state;
    
    return(
      <div className={s.App}>
        <Header 
          sectionToRender={sectionToRender} 
          handleChangeSectionToRender={this.changeSectionToRender}
        >
          <form 
            onSubmit={(e) => e.preventDefault()}
            className={s.searchFormulary}
          >
            <input 
              onChange={this.handleChange}
              className={s.searchBarInput}
              type="text" 
              placeholder="Encuentra tu aroma..."
              value={this.state.valueToSearch}
            ></input>
          </form>
          { this.state.results !== "" &&

          <button 
            onClick={this.handleClickBtnCloseResults}
            className={s.resultsCloseBtn}
          >
            X
          </button>
          }
          { this.state.results !== "" && 
            <SearchResults
              onClickCloseBtn={this.handleClickBtnCloseResults}
            >
              {this.state.results}
            </SearchResults> 
            }
        </Header>
          {this.defineMainComponentContent(sectionToRender)}
          <UpBtn/>
      </div>
    )
  }
}

// ** EXPORTS
export default App;