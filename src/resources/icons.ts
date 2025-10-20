import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  // Tooling / Cloud / DevOps
  SiGooglecloud,
  SiTerraform,
  SiPulumi,
  SiAnsible,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiArgo,
  SiFlux,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiElastic,
  // Security / QA
  SiSnyk,
  SiSonarqube,
  // AI/ML & Python stack
  SiScikitlearn,
  SiPython,
  SiNumpy,
  SiPandas,
  SiOpencv,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaAws,
  FaChartLine,
  FaWater,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
  FaShieldHalved,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  // Cloud & DevOps (mapped to content icon strings)
  aws: FaAws,
  amazonaws: FaAws, // alias
  gcp: SiGooglecloud,
  terraform: SiTerraform,
  cloudformation: FaAws, // fallback to AWS logo
  codepipeline: FaAws, // alias for AWS CodePipeline
  codePipeline: FaAws, // alias (camelCase)
  jenkins: SiJenkins,
  githubmark: SiGithub, // alternative github mark if needed
  gitlab: SiGitlab,
  ansible: SiAnsible,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  argocd: SiArgo,
  flux: SiFlux,
  helm: SiHelm,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  elk: SiElastic, // Elastic as ELK representative
  // Security / QA
  snyk: SiSnyk,
  sonarqube: SiSonarqube,
  zap: FaShieldHalved, // OWASP ZAP fallback
  owaspzap: FaShieldHalved, // alias without dash/space
  "owasp-zap": FaShieldHalved, // alias kebab-case
  trivy: SiDocker, // fallback icon (no Simple Icon for Trivy yet)
  dependencyTrack: SiElastic, // fallback icon
  "dependency-track": SiElastic, // kebab-case alias
  shield: FaShieldHalved, // used by content for Dependency-Track
  // AI/ML & Python stack
  scikit: SiScikitlearn,
  python: SiPython,
  numpy: SiNumpy,
  pandas: SiPandas,
  opencv: SiOpencv,
  matplotlib: FaChartLine,
  seaborn: FaWater,
  pulumi: SiPulumi,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
