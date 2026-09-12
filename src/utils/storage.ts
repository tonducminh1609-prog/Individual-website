import { PortfolioPost, StudentProfile } from '../types';
import { INITIAL_POSTS, INITIAL_PROFILE } from '../data/initialData';

const POSTS_KEY = 'ton_duc_minh_portfolio_posts_v10';
const PROFILE_KEY = 'ton_duc_minh_portfolio_profile_v10';

export function getStoredPosts(): PortfolioPost[] {
  try {
    const data = localStorage.getItem(POSTS_KEY);
    if (!data) {
      localStorage.setItem(POSTS_KEY, JSON.stringify(INITIAL_POSTS));
      return INITIAL_POSTS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to parse stored posts', err);
    return INITIAL_POSTS;
  }
}

export function saveStoredPosts(posts: PortfolioPost[]): void {
  try {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  } catch (err) {
    console.error('Failed to save posts to localStorage', err);
  }
}

export function getStoredProfile(): StudentProfile {
  try {
    const data = localStorage.getItem(PROFILE_KEY);
    if (!data) {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(INITIAL_PROFILE));
      return INITIAL_PROFILE;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to parse stored profile', err);
    return INITIAL_PROFILE;
  }
}

export function saveStoredProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save profile to localStorage', err);
  }
}

export function resetToInitialData(): { posts: PortfolioPost[]; profile: StudentProfile } {
  localStorage.setItem(POSTS_KEY, JSON.stringify(INITIAL_POSTS));
  localStorage.setItem(PROFILE_KEY, JSON.stringify(INITIAL_PROFILE));
  return { posts: INITIAL_POSTS, profile: INITIAL_PROFILE };
}
