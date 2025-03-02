import { useState } from 'react';

import { IPlace } from './type';
import { categories, years, filterPlaces } from '@utils/placesHelper';
import { slideInFromBottom, slideInFromRight } from '@styles/animation';
import {
  CategoryFilter,
  CategoryButton,
  FiltersWrapper,
  PlaceCard,
  PlacesList,
  PlacesSection,
  YearFilter,
  YearButton,
} from './style';

const Places = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredPlaces = filterPlaces(selectedCategory, selectedYear);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleYearClick = (year: number) => {
    setSelectedYear(prevYear => (prevYear === year && year === 1000 ? null : year));
  };

  return (
    <PlacesSection {...slideInFromBottom}>
      <header>Duis tincidunt ut ligula vitae mollis.</header>

      <FiltersWrapper>
        <CategoryFilter>
          {categories.map((category: string) => (
            <CategoryButton
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              $selected={selectedCategory === category}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryFilter>

        <YearFilter>
          {years.map((year: number, index: number) => (
            <YearButton
              key={year}
              $selectedBtn={selectedYear !== null && year <= selectedYear}
              $selectedLine={selectedYear !== null && years[index + 1] <= selectedYear}
            >
              <button type="button" onClick={() => handleYearClick(year)}>
                {year}
              </button>

              {index !== years.length - 1 && <span />}
            </YearButton>
          ))}
        </YearFilter>
      </FiltersWrapper>

      <PlacesList>
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map(({ title, year, image, description }: IPlace, index: number) => (
            <PlaceCard key={`${selectedCategory}-${selectedYear}-${title}`} {...slideInFromRight(index)}>
              <div>
                <p>{title}</p>
                <span>{year}</span>
              </div>

              <img src={image} alt={`${title} image`} />

              <p>{description}</p>
            </PlaceCard>
          ))
        ) : (
          <div>
            <img src="/places/no-result.webp" />
          </div>
        )}
      </PlacesList>
    </PlacesSection>
  );
};

export default Places;
