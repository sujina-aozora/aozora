// Lucide icons: only the icons used on the site are bundled (tree-shaken).
// Usage in HTML: <i data-lucide="arrow-right"></i>
import {
  createIcons,
  ArrowDown, ArrowLeft, ArrowRight, ArrowLeftRight, ArrowUpRight, Bot, Building2, Check, CircleHelp,
  ClipboardCheck, Clock, Code, Compass, Copy, Eye, FileCheck, FileText, FlaskConical, Gauge,
  GitBranch, Globe, GraduationCap, Handshake, KeyRound, Languages, LayoutDashboard, Lightbulb,
  ListChecks, Lock, Mail, MapPin, Menu, MessageSquare, Monitor, Package, Phone, RefreshCcw,
  RotateCcw, Search, Server, Shield, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target,
  TrendingUp, UserCheck, Users, Wine, Workflow, Wrench, X,
  Car, Wheat, HeartHandshake, Shirt, ShoppingBag, Newspaper, Store, Building, Camera, Mountain, Layers, Briefcase
} from 'lucide';

const ICONS = {
  ArrowDown, ArrowLeft, ArrowRight, ArrowLeftRight, ArrowUpRight, Bot, Building2, Check, CircleHelp,
  ClipboardCheck, Clock, Code, Compass, Copy, Eye, FileCheck, FileText, FlaskConical, Gauge,
  GitBranch, Globe, GraduationCap, Handshake, KeyRound, Languages, LayoutDashboard, Lightbulb,
  ListChecks, Lock, Mail, MapPin, Menu, MessageSquare, Monitor, Package, Phone, RefreshCcw,
  RotateCcw, Search, Server, Shield, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Target,
  TrendingUp, UserCheck, Users, Wine, Workflow, Wrench, X,
  Car, Wheat, HeartHandshake, Shirt, ShoppingBag, Newspaper, Store, Building, Camera, Mountain, Layers, Briefcase
};

export function renderIcons() {
  createIcons({ icons: ICONS, attrs: { 'stroke-width': 1.5, 'aria-hidden': 'true', focusable: 'false' } });
}
