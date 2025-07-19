import React, { useState } from 'react';
import { Lightbulb, CheckCircle, X, ArrowRight, Sparkles } from 'lucide-react';

const SuggestionPanel = ({ suggestions, onApplySuggestion, onDismissSuggestion }) => {
  const [expandedSuggestion, setExpandedSuggestion] = useState(null);

  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'accessibility':
        return '♿';
      case 'performance':
        return '⚡';
      case 'design':
        return '🎨';
      case 'ux':
        return '👤';
      default:
        return '💡';
    }
  };

  const getSuggestionColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50';
      case 'medium':
        return 'border-yellow-200 bg-yellow-50';
      case 'low':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-stone-200 bg-stone-50';
    }
  };

  return (
    <div className="w-80 bg-white border-l border-stone-200 h-full overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-stone-100 bg-stone-50">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-stone-600" />
          <h3 className="font-semibold text-stone-800">Smart Suggestions</h3>
          {suggestions.length > 0 && (
            <span className="bg-stone-200 text-stone-700 text-xs px-2 py-1 rounded-full">
              {suggestions.length}
            </span>
          )}
        </div>
        <p className="text-sm text-stone-600 mt-1">
          AI-powered recommendations to improve your design
        </p>
      </div>

      {/* Suggestions List */}
      <div className="p-4 space-y-4">
        {suggestions.length === 0 ? (
          <div className="text-center py-8">
            <Lightbulb className="w-12 h-12 mx-auto text-stone-300 mb-3" />
            <p className="text-stone-500 text-sm">No suggestions available</p>
            <p className="text-stone-400 text-xs mt-1">
              Keep designing and we'll provide helpful tips!
            </p>
          </div>
        ) : (
          suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={`border rounded-lg p-4 transition-all duration-200 ${getSuggestionColor(suggestion.priority)}`}
            >
              {/* Suggestion Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-stone-800 text-sm">
                      {suggestion.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      {suggestion.category} • {suggestion.priority} priority
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onDismissSuggestion(suggestion.id)}
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Suggestion Description */}
              <p className="text-sm text-stone-700 mb-3">
                {suggestion.description}
              </p>

              {/* Expandable Details */}
              {suggestion.details && (
                <div className="mb-3">
                  <button
                    onClick={() => setExpandedSuggestion(
                      expandedSuggestion === suggestion.id ? null : suggestion.id
                    )}
                    className="text-xs text-stone-600 hover:text-stone-800 flex items-center space-x-1"
                  >
                    <span>View details</span>
                    <ArrowRight 
                      className={`w-3 h-3 transition-transform ${
                        expandedSuggestion === suggestion.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedSuggestion === suggestion.id && (
                    <div className="mt-2 p-3 bg-white rounded border text-xs text-stone-600">
                      {suggestion.details}
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => onApplySuggestion(suggestion)}
                  className="flex-1 bg-stone-800 text-white px-3 py-2 rounded text-xs hover:bg-stone-700 transition-colors flex items-center justify-center space-x-1"
                >
                  <CheckCircle className="w-3 h-3" />
                  <span>Apply</span>
                </button>
                <button
                  onClick={() => onDismissSuggestion(suggestion.id)}
                  className="px-3 py-2 border border-stone-300 text-stone-600 rounded text-xs hover:bg-stone-50 transition-colors"
                >
                  Dismiss
                </button>
              </div>

              {/* Impact Indicator */}
              {suggestion.impact && (
                <div className="mt-3 pt-3 border-t border-stone-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-600">Expected impact:</span>
                    <span className="font-medium text-stone-800">{suggestion.impact}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-stone-100 bg-stone-50">
        <div className="text-xs text-stone-500 text-center">
          <p>Suggestions powered by AI</p>
          <p className="mt-1">Updated in real-time as you design</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionPanel;