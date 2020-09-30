import React from 'react';
import Styles from './PageNavigator.module.css';

export const PageNavigatorContext = React.createContext({});

class PageNavigator extends React.PureComponent {

  state = {
    selectedPage: 0,
    canGoPrev: false,
    canGoNext: false,
  }

  changePage = jump => {
    this.setState(
      (prevState, props) => {
        const numPages = props.children.length;
        let newSelectedPage = prevState.selectedPage + jump;
        if (newSelectedPage < 0) {
          newSelectedPage = 0;
        }
        if (newSelectedPage >= numPages) {
         newSelectedPage = numPages - 1;
        }
        return {
          selectedPage: newSelectedPage,
          canGoPrev: false,
          canGoNext: false,
        };
      }
    )
  };

  changeNavigation = (canPrev, canNext, nextIsEnd) => {
    this.setState({
      canGoPrev: canPrev,
      canGoNext: canNext,
    });
  }

  render() {
    console.log("Render Page Navigator")
    return (
      <React.Fragment>
        <div className={Styles.pageNavigatorHeader}>
          <button disabled={!this.state.canGoPrev} onClick={() => this.changePage(-1)}>Prev</button>
          <button disabled={!this.state.canGoNext} onClick={() => this.changePage(+1)}>Next</button>
          {this.state.selectedPage}
        </div>
        <PageNavigatorContext.Provider value={{changeNavigation : this.changeNavigation}}>
          <div className={Styles.pageNavigatorBody}>
            {
              this.props.children.filter(
                (arrayItem, itemIndexInArray) => itemIndexInArray == this.state.selectedPage)
            }
          </div>
        </PageNavigatorContext.Provider>
      </React.Fragment>
    );
  }

};

export default PageNavigator;