import { useState } from 'react';
import EventsBanner from '../components/ProjectListPage/EventsBanner';
import SearchBar from '../components/ProjectListPage/SearchBar';
import ProjectList from '../components/ProjectListPage/ProjectList';

export default function ProjectListPage() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('전체');

  return (
    <div className="min-h-screen pt-24 pb-[230px] w-full bg-mainWhite flex flex-col items-center overflow-x-hidden">
      <EventsBanner />
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        selectedLocation={location}
        onLocationChange={setLocation}
      />
      <ProjectList keyword={keyword} location={location} />
    </div>
  );
}
